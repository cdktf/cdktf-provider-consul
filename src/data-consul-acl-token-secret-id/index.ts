// https://www.terraform.io/docs/providers/consul/d/acl_token_secret_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConsulAclTokenSecretIdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/acl_token_secret_id#accessor_id DataConsulAclTokenSecretId#accessor_id}
  */
  readonly accessorId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/acl_token_secret_id#id DataConsulAclTokenSecretId#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/acl_token_secret_id#namespace DataConsulAclTokenSecretId#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/acl_token_secret_id#partition DataConsulAclTokenSecretId#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/acl_token_secret_id#pgp_key DataConsulAclTokenSecretId#pgp_key}
  */
  readonly pgpKey?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/consul/d/acl_token_secret_id consul_acl_token_secret_id}
*/
export class DataConsulAclTokenSecretId extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_acl_token_secret_id";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/consul/d/acl_token_secret_id consul_acl_token_secret_id} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConsulAclTokenSecretIdConfig
  */
  public constructor(scope: Construct, id: string, config: DataConsulAclTokenSecretIdConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_acl_token_secret_id',
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
    this._id = config.id;
    this._namespace = config.namespace;
    this._partition = config.partition;
    this._pgpKey = config.pgpKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor_id - computed: false, optional: false, required: true
  private _accessorId?: string; 
  public get accessorId() {
    return this.getStringAttribute('accessor_id');
  }
  public set accessorId(value: string) {
    this._accessorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessorIdInput() {
    return this._accessorId;
  }

  // encrypted_secret_id - computed: true, optional: false, required: false
  public get encryptedSecretId() {
    return this.getStringAttribute('encrypted_secret_id');
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

  // pgp_key - computed: false, optional: true, required: false
  private _pgpKey?: string; 
  public get pgpKey() {
    return this.getStringAttribute('pgp_key');
  }
  public set pgpKey(value: string) {
    this._pgpKey = value;
  }
  public resetPgpKey() {
    this._pgpKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgpKeyInput() {
    return this._pgpKey;
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessor_id: cdktf.stringToTerraform(this._accessorId),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      partition: cdktf.stringToTerraform(this._partition),
      pgp_key: cdktf.stringToTerraform(this._pgpKey),
    };
  }
}
