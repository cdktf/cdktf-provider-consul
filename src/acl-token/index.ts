// https://www.terraform.io/docs/providers/consul/r/acl_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The token id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#accessor_id AclToken#accessor_id}
  */
  readonly accessorId?: string;
  /**
  * The token description.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#description AclToken#description}
  */
  readonly description?: string;
  /**
  * If set this represents the point after which a token should be considered revoked and is eligible for destruction.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#expiration_time AclToken#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#id AclToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Flag to set the token local to the current datacenter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#local AclToken#local}
  */
  readonly local?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#namespace AclToken#namespace}
  */
  readonly namespace?: string;
  /**
  * The partition the ACL token is associated with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#partition AclToken#partition}
  */
  readonly partition?: string;
  /**
  * List of policies.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#policies AclToken#policies}
  */
  readonly policies?: string[];
  /**
  * List of roles
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#roles AclToken#roles}
  */
  readonly roles?: string[];
  /**
  * node_identities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#node_identities AclToken#node_identities}
  */
  readonly nodeIdentities?: AclTokenNodeIdentities[] | cdktf.IResolvable;
  /**
  * service_identities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#service_identities AclToken#service_identities}
  */
  readonly serviceIdentities?: AclTokenServiceIdentities[] | cdktf.IResolvable;
}
export interface AclTokenNodeIdentities {
  /**
  * Specifies the node's datacenter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#datacenter AclToken#datacenter}
  */
  readonly datacenter: string;
  /**
  * The name of the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#node_name AclToken#node_name}
  */
  readonly nodeName: string;
}

export function aclTokenNodeIdentitiesToTerraform(struct?: AclTokenNodeIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
  }
}

export class AclTokenNodeIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AclTokenNodeIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AclTokenNodeIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenter = undefined;
      this._nodeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenter = value.datacenter;
      this._nodeName = value.nodeName;
    }
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }
}

export class AclTokenNodeIdentitiesList extends cdktf.ComplexList {
  public internalValue? : AclTokenNodeIdentities[] | cdktf.IResolvable

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
  public get(index: number): AclTokenNodeIdentitiesOutputReference {
    return new AclTokenNodeIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AclTokenServiceIdentities {
  /**
  * Specifies the datacenters the effective policy is valid within.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#datacenters AclToken#datacenters}
  */
  readonly datacenters?: string[];
  /**
  * The name of the service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#service_name AclToken#service_name}
  */
  readonly serviceName: string;
}

export function aclTokenServiceIdentitiesToTerraform(struct?: AclTokenServiceIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datacenters),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class AclTokenServiceIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AclTokenServiceIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenters = this._datacenters;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AclTokenServiceIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenters = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenters = value.datacenters;
      this._serviceName = value.serviceName;
    }
  }

  // datacenters - computed: false, optional: true, required: false
  private _datacenters?: string[]; 
  public get datacenters() {
    return this.getListAttribute('datacenters');
  }
  public set datacenters(value: string[]) {
    this._datacenters = value;
  }
  public resetDatacenters() {
    this._datacenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}

export class AclTokenServiceIdentitiesList extends cdktf.ComplexList {
  public internalValue? : AclTokenServiceIdentities[] | cdktf.IResolvable

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
  public get(index: number): AclTokenServiceIdentitiesOutputReference {
    return new AclTokenServiceIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/consul/r/acl_token consul_acl_token}
*/
export class AclToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_acl_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/consul/r/acl_token consul_acl_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclTokenConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AclTokenConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'consul_acl_token',
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
    this._accessorId = config.accessorId;
    this._description = config.description;
    this._expirationTime = config.expirationTime;
    this._id = config.id;
    this._local = config.local;
    this._namespace = config.namespace;
    this._partition = config.partition;
    this._policies = config.policies;
    this._roles = config.roles;
    this._nodeIdentities.internalValue = config.nodeIdentities;
    this._serviceIdentities.internalValue = config.serviceIdentities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor_id - computed: true, optional: true, required: false
  private _accessorId?: string; 
  public get accessorId() {
    return this.getStringAttribute('accessor_id');
  }
  public set accessorId(value: string) {
    this._accessorId = value;
  }
  public resetAccessorId() {
    this._accessorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessorIdInput() {
    return this._accessorId;
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

  // expiration_time - computed: false, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
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

  // local - computed: false, optional: true, required: false
  private _local?: boolean | cdktf.IResolvable; 
  public get local() {
    return this.getBooleanAttribute('local');
  }
  public set local(value: boolean | cdktf.IResolvable) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
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

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // node_identities - computed: false, optional: true, required: false
  private _nodeIdentities = new AclTokenNodeIdentitiesList(this, "node_identities", false);
  public get nodeIdentities() {
    return this._nodeIdentities;
  }
  public putNodeIdentities(value: AclTokenNodeIdentities[] | cdktf.IResolvable) {
    this._nodeIdentities.internalValue = value;
  }
  public resetNodeIdentities() {
    this._nodeIdentities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdentitiesInput() {
    return this._nodeIdentities.internalValue;
  }

  // service_identities - computed: false, optional: true, required: false
  private _serviceIdentities = new AclTokenServiceIdentitiesList(this, "service_identities", false);
  public get serviceIdentities() {
    return this._serviceIdentities;
  }
  public putServiceIdentities(value: AclTokenServiceIdentities[] | cdktf.IResolvable) {
    this._serviceIdentities.internalValue = value;
  }
  public resetServiceIdentities() {
    this._serviceIdentities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdentitiesInput() {
    return this._serviceIdentities.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessor_id: cdktf.stringToTerraform(this._accessorId),
      description: cdktf.stringToTerraform(this._description),
      expiration_time: cdktf.stringToTerraform(this._expirationTime),
      id: cdktf.stringToTerraform(this._id),
      local: cdktf.booleanToTerraform(this._local),
      namespace: cdktf.stringToTerraform(this._namespace),
      partition: cdktf.stringToTerraform(this._partition),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      node_identities: cdktf.listMapper(aclTokenNodeIdentitiesToTerraform, true)(this._nodeIdentities.internalValue),
      service_identities: cdktf.listMapper(aclTokenServiceIdentitiesToTerraform, true)(this._serviceIdentities.internalValue),
    };
  }
}
