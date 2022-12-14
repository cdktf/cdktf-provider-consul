// https://www.terraform.io/docs/providers/consul/r/acl_auth_method
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclAuthMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * The raw configuration for this ACL auth method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method#config AclAuthMethod#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * The raw configuration for this ACL auth method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method#config_json AclAuthMethod#config_json}
  */
  readonly configJson?: string;
  /**
  * A free form human readable description of the auth method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method#description AclAuthMethod#description}
  */
  readonly description?: string;
  /**
  * An optional name to use instead of the name attribute when displaying information about this auth method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method#display_name AclAuthMethod#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method#id AclAuthMethod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum life of any token created by this auth method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method#max_token_ttl AclAuthMethod#max_token_ttl}
  */
  readonly maxTokenTtl?: string;
  /**
  * The name of the ACL auth method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method#name AclAuthMethod#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method#namespace AclAuthMethod#namespace}
  */
  readonly namespace?: string;
  /**
  * The partition the ACL auth method is associated with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method#partition AclAuthMethod#partition}
  */
  readonly partition?: string;
  /**
  * The kind of token that this auth method produces. This can be either 'local' or 'global'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method#token_locality AclAuthMethod#token_locality}
  */
  readonly tokenLocality?: string;
  /**
  * The type of the ACL auth method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method#type AclAuthMethod#type}
  */
  readonly type: string;
  /**
  * namespace_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method#namespace_rule AclAuthMethod#namespace_rule}
  */
  readonly namespaceRule?: AclAuthMethodNamespaceRule[] | cdktf.IResolvable;
}
export interface AclAuthMethodNamespaceRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method#bind_namespace AclAuthMethod#bind_namespace}
  */
  readonly bindNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method#selector AclAuthMethod#selector}
  */
  readonly selector?: string;
}

export function aclAuthMethodNamespaceRuleToTerraform(struct?: AclAuthMethodNamespaceRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_namespace: cdktf.stringToTerraform(struct!.bindNamespace),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}

export class AclAuthMethodNamespaceRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AclAuthMethodNamespaceRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindNamespace = this._bindNamespace;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AclAuthMethodNamespaceRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindNamespace = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindNamespace = value.bindNamespace;
      this._selector = value.selector;
    }
  }

  // bind_namespace - computed: false, optional: false, required: true
  private _bindNamespace?: string; 
  public get bindNamespace() {
    return this.getStringAttribute('bind_namespace');
  }
  public set bindNamespace(value: string) {
    this._bindNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindNamespaceInput() {
    return this._bindNamespace;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class AclAuthMethodNamespaceRuleList extends cdktf.ComplexList {
  public internalValue? : AclAuthMethodNamespaceRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AclAuthMethodNamespaceRuleOutputReference {
    return new AclAuthMethodNamespaceRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method consul_acl_auth_method}
*/
export class AclAuthMethod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_acl_auth_method";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/consul/r/acl_auth_method consul_acl_auth_method} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclAuthMethodConfig
  */
  public constructor(scope: Construct, id: string, config: AclAuthMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_acl_auth_method',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.17.0',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._configJson = config.configJson;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._maxTokenTtl = config.maxTokenTtl;
    this._name = config.name;
    this._namespace = config.namespace;
    this._partition = config.partition;
    this._tokenLocality = config.tokenLocality;
    this._type = config.type;
    this._namespaceRule.internalValue = config.namespaceRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // config_json - computed: false, optional: true, required: false
  private _configJson?: string; 
  public get configJson() {
    return this.getStringAttribute('config_json');
  }
  public set configJson(value: string) {
    this._configJson = value;
  }
  public resetConfigJson() {
    this._configJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configJsonInput() {
    return this._configJson;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_token_ttl - computed: false, optional: true, required: false
  private _maxTokenTtl?: string; 
  public get maxTokenTtl() {
    return this.getStringAttribute('max_token_ttl');
  }
  public set maxTokenTtl(value: string) {
    this._maxTokenTtl = value;
  }
  public resetMaxTokenTtl() {
    this._maxTokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokenTtlInput() {
    return this._maxTokenTtl;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // token_locality - computed: false, optional: true, required: false
  private _tokenLocality?: string; 
  public get tokenLocality() {
    return this.getStringAttribute('token_locality');
  }
  public set tokenLocality(value: string) {
    this._tokenLocality = value;
  }
  public resetTokenLocality() {
    this._tokenLocality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLocalityInput() {
    return this._tokenLocality;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // namespace_rule - computed: false, optional: true, required: false
  private _namespaceRule = new AclAuthMethodNamespaceRuleList(this, "namespace_rule", false);
  public get namespaceRule() {
    return this._namespaceRule;
  }
  public putNamespaceRule(value: AclAuthMethodNamespaceRule[] | cdktf.IResolvable) {
    this._namespaceRule.internalValue = value;
  }
  public resetNamespaceRule() {
    this._namespaceRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceRuleInput() {
    return this._namespaceRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      config_json: cdktf.stringToTerraform(this._configJson),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      max_token_ttl: cdktf.stringToTerraform(this._maxTokenTtl),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      partition: cdktf.stringToTerraform(this._partition),
      token_locality: cdktf.stringToTerraform(this._tokenLocality),
      type: cdktf.stringToTerraform(this._type),
      namespace_rule: cdktf.listMapper(aclAuthMethodNamespaceRuleToTerraform, true)(this._namespaceRule.internalValue),
    };
  }
}
